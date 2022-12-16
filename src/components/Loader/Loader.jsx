import PulseLoader from 'react-spinners/HashLoader';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderWrap}>
      <PulseLoader color="#4985ff" height={80} width={80} />
    </div>
  );
};

export default Loader;
