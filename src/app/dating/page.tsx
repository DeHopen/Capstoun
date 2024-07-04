import {FC} from 'react';


const Page: FC= () => {
  console.log('Render Page');
  const text = 'Page component';

  return (
      <>
        <h2>{text}</h2>
      </>
  );
};

export default Page;