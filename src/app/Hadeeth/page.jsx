import React from 'react';
import SectionProfile from '../SectionProfile/SectionProfile';

function Hadeeth() {
  return (
    <div>
      <SectionProfile
        sectionName={'الحديث'}
        sectionDescription={`أصحاب الكتب الستة هم :
 الإمام البخاري والإمام مسلم  والإمام أبو داود

 والإمام الترمذي   والإمام النسائي    والإمام ابن ماجه`}
      />
    </div>
  );
}

export default Hadeeth;
