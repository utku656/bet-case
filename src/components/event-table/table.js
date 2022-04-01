import React , { useState , useEffect , memo , Fragment } from 'react';
import data from '../../data/bulten_data.json';
import TableHeader from './table-header/table-header';
import TableRow from './table-row/table-row';
import './table.scss';

const events = Object.values(data.Events);

function Table  ()  {
  const [page, setPage] = useState(1);
  const perPage = 50;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const innerHeight = window.innerHeight;
    const yOffSet = window.pageYOffset;
    const height = document.body.offsetHeight;

    if ((innerHeight + yOffSet) >= height) {
      setPage((prevState) => prevState + 1);
    }
  };

  const createPage = (event,index) => {
    
    const staticVariable = 4;
        const matchResult = {
          host: {
            rate: event.OCG[1].OC[0].O,
            mbs: event.OCG[1].OC[0].MBS,
            id: event.OCG[1].ID,
          },
          draw: {
            rate: event.OCG[1].OC[1].O,
            mbs: event.OCG[1].OC[1].MBS,
            id: event.OCG[1].ID,
          },
        };

        const goalCountResult = {
          lower: {
            rate: event.OCG[5].OC[25].O,
            mbs: event.OCG[5].OC[25].MBS,
            id: event.OCG[5].ID,
          },
          upper: {
            rate: event.OCG[5].OC[26].O,
            mbs: event.OCG[5].OC[26].MBS,
            id: event.OCG[5].ID,
          },
        };

        const doubleChanceResult = {
          x1: {
            rate: event.OCG[2].OC[3].O,
            mbs: event.OCG[2].OC[3].MBS,
            id: event.OCG[2].ID,
          },
          x12: {
            rate: event.OCG[2].OC[4].O,
            mbs: event.OCG[2].OC[4].MBS,
            id: event.OCG[2].ID,
          },
          x2: {
            rate: event.OCG[2].OC[5].O,
            mbs: event.OCG[2].OC[5].MBS,
            id: event.OCG[2].ID,
          },
        };

        return (
          <Fragment key={`${event.C}-${event.N}`}>
            <TableHeader title={`${event.C} ${event.LN}`} index={index} />
            <TableRow
              code={event.C}
              time={event.T}
              info={event.N}
              staticVariable={staticVariable}
              matchResult={matchResult}
              goalCountResult={goalCountResult}
              doubleChanceResult={doubleChanceResult}
            />
          </Fragment>
        );
  };
  
  return (
    <div className="table-container">
      <TableHeader title={`Event Count:${events.length}`} isFirstElement />
      {events.slice(0, page * perPage).map((event, index) => {
        return createPage(event, index);
      })}
    </div>
  );
};

export default memo(Table);
