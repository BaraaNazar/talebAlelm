import React from 'react';
import SectionProfile from '../SectionProfile/SectionProfile';

function Alfaraid() {
  return (
    <div>
      <SectionProfile
        section={'/Alfaraid'}
        sectionName={'الفرائض'}
        sectionDescription={`علم الفرائض أو علم المواريث هو أحد أهم العلوم الإسلامية وهو العلم الذي يعنى بأحوال تَرِكة الميت وميراثه من حيث قسمها على مستحقيها، وهو أول العلوم التي ترفع من الأرض`}
      />
    </div>
  );
}

export default Alfaraid;
