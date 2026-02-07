// import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';
import AnnouncementsBar from '../AnnouncementsBar';

const SubHeader = () => {
  return (
    <>
      <div className="subheader bg-dark text-light fs-6" style={{ padding: '11px 0' }}>
        <div className="container-xl text-center">
          إعلامات وتحديثات المنصة: <a href="https://t.me/darelom_students">قناة التليجرام.</a>
        </div>
      </div>
      <AnnouncementsBar />

      <div
        className="subheader text-center py-3 bg-dark border-top text-light fs-6"
        style={{ padding: '11px 0' }}
      >
        <a href="https://darelom-students.netlify.app">
          رابط ترتيب نتائج الفصل الدراسي الأول - 2026.
        </a>
      </div>
      {/* <div className='subheader bg-dark border-top text-light fs-6' style={{ padding: '11px 0' }}>
        <div className='container-xl text-center'>
          يمكنكم الآن الاطلاع على ترتيب الفرق 2025.
        </div>
      </div> */}
    </>
  );
};

export default SubHeader;
