import PropTypes from "prop-types";
import React, { memo } from "react";

import { SectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo((props) => {
  const { sectionData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />
      <SectionRooms listData={sectionData?.list?.slice(0, 8)} />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  sectionData: PropTypes.object
};

export default HomeSectionV1;
