// Master Lessons Registry for Complete CSS Learning Platform

import { whatIsCssLesson } from './01-what-is-css';
import { howCssWorksLesson } from './02-how-css-works';
import { cssSyntaxAndRulesLesson } from './03-css-syntax-and-rules';
import { waysToAddCssLesson } from './04-ways-to-add-css';
import { cssCommentsLesson } from './05-css-comments';
import { browserDefaultStylesLesson } from './06-browser-default-styles';
import { universalAndTypeSelectorsLesson } from './07-universal-and-type-selectors';
import { classAndIdSelectorsLesson } from './08-class-and-id-selectors';
import { attributeSelectorsLesson } from './09-attribute-selectors';
import { cssCombinatorsLesson } from './10-css-combinators';
import { modernLogicalPseudoClassesLesson } from './11-modern-logical-pseudo-classes';
import { structuralPseudoClassesLesson } from './12-structural-pseudo-classes';
import { theCascadeAlgorithmLesson } from './13-the-cascade-algorithm';
import { cssSpecificityLesson } from './14-css-specificity';
import { inheritanceAndDefaultsLesson } from './15-inheritance-and-defaults';
import { cascadeLayersLesson } from './16-cascade-layers';
import { absoluteAndRelativeUnitsLesson } from './17-absolute-and-relative-units';
import { viewportUnitsLesson } from './18-viewport-units';
import { cssMathFunctionsLesson } from './19-css-math-functions';
import { cssBoxModelLesson } from './20-css-box-model';
import { boxSizingLesson } from './21-box-sizing';
import { marginCollapsingLesson } from './22-margin-collapsing';
import { overflowHandlingLesson } from './23-overflow-handling';
import { modernColorSpacesAndOklchLesson } from './24-modern-color-spaces-and-oklch';
import { cssGradientsLesson } from './25-css-gradients';
import { webTypographyAndFontFaceLesson } from './26-web-typography-and-font-face';
import { cssDisplayModesLesson } from './27-css-display-modes';
import { cssPositioningLesson } from './28-css-positioning';
import { stackingContextsAndZIndexLesson } from './29-stacking-contexts-and-z-index';
import { flexboxFundamentalsLesson } from './30-flexbox-fundamentals';
import { flexboxAlignmentAndGapLesson } from './31-flexbox-alignment-and-gap';
import { flexItemSizingLesson } from './32-flex-item-sizing';
import { cssGridFundamentalsLesson } from './33-css-grid-fundamentals';
import { gridTemplateColumnsAndMinmaxLesson } from './34-grid-template-columns-and-minmax';
import { cssSubgridLesson } from './35-css-subgrid';
import { mediaQueriesAndMobileFirstLesson } from './36-media-queries-and-mobile-first';
import { cssContainerQueriesLesson } from './37-css-container-queries';
import { boxShadowsAndFiltersLesson } from './38-box-shadows-and-filters';
import { cssTransitionsLesson } from './39-css-transitions';
import { cssKeyframeAnimationsLesson } from './40-css-keyframe-animations';
import { scrollDrivenAnimationsLesson } from './41-scroll-driven-animations';
import { pseudoElementsBeforeAfterLesson } from './42-pseudo-elements-before-after';
import { modernFormStylingLesson } from './43-modern-form-styling';
import { cssCustomPropertiesVariablesLesson } from './44-css-custom-properties-variables';
import { nativeCssNestingLesson } from './45-native-css-nesting';
import { cssAnchorPositioningLesson } from './46-css-anchor-positioning';
import { cssArchitectureAndBemLesson } from './47-css-architecture-and-bem';
import { renderingPerformanceAndContainmentLesson } from './48-rendering-performance-and-containment';
import { cssAtRulesReferenceLesson } from './49-css-at-rules-reference';
import { cssFunctionsReferenceLesson } from './50-css-functions-reference';

const lessonsMap = {
  'what-is-css': whatIsCssLesson,
  'how-css-works': howCssWorksLesson,
  'css-syntax-and-rules': cssSyntaxAndRulesLesson,
  'ways-to-add-css': waysToAddCssLesson,
  'css-comments': cssCommentsLesson,
  'browser-default-styles': browserDefaultStylesLesson,
  'universal-and-type-selectors': universalAndTypeSelectorsLesson,
  'class-and-id-selectors': classAndIdSelectorsLesson,
  'attribute-selectors': attributeSelectorsLesson,
  'css-combinators': cssCombinatorsLesson,
  'modern-logical-pseudo-classes': modernLogicalPseudoClassesLesson,
  'structural-pseudo-classes': structuralPseudoClassesLesson,
  'the-cascade-algorithm': theCascadeAlgorithmLesson,
  'css-specificity': cssSpecificityLesson,
  'inheritance-and-defaults': inheritanceAndDefaultsLesson,
  'cascade-layers': cascadeLayersLesson,
  'absolute-and-relative-units': absoluteAndRelativeUnitsLesson,
  'viewport-units': viewportUnitsLesson,
  'css-math-functions': cssMathFunctionsLesson,
  'css-box-model': cssBoxModelLesson,
  'box-sizing': boxSizingLesson,
  'margin-collapsing': marginCollapsingLesson,
  'overflow-handling': overflowHandlingLesson,
  'modern-color-spaces-and-oklch': modernColorSpacesAndOklchLesson,
  'css-gradients': cssGradientsLesson,
  'web-typography-and-font-face': webTypographyAndFontFaceLesson,
  'css-display-modes': cssDisplayModesLesson,
  'css-positioning': cssPositioningLesson,
  'stacking-contexts-and-z-index': stackingContextsAndZIndexLesson,
  'flexbox-fundamentals': flexboxFundamentalsLesson,
  'flexbox-alignment-and-gap': flexboxAlignmentAndGapLesson,
  'flex-item-sizing': flexItemSizingLesson,
  'css-grid-fundamentals': cssGridFundamentalsLesson,
  'grid-template-columns-and-minmax': gridTemplateColumnsAndMinmaxLesson,
  'css-subgrid': cssSubgridLesson,
  'media-queries-and-mobile-first': mediaQueriesAndMobileFirstLesson,
  'css-container-queries': cssContainerQueriesLesson,
  'box-shadows-and-filters': boxShadowsAndFiltersLesson,
  'css-transitions': cssTransitionsLesson,
  'css-keyframe-animations': cssKeyframeAnimationsLesson,
  'scroll-driven-animations': scrollDrivenAnimationsLesson,
  'pseudo-elements-before-after': pseudoElementsBeforeAfterLesson,
  'modern-form-styling': modernFormStylingLesson,
  'css-custom-properties-variables': cssCustomPropertiesVariablesLesson,
  'native-css-nesting': nativeCssNestingLesson,
  'css-anchor-positioning': cssAnchorPositioningLesson,
  'css-architecture-and-bem': cssArchitectureAndBemLesson,
  'rendering-performance-and-containment': renderingPerformanceAndContainmentLesson,
  'css-at-rules-reference': cssAtRulesReferenceLesson,
  'css-functions-reference': cssFunctionsReferenceLesson,
};

export function getLessonData(slug) {
  return lessonsMap[slug] || null;
}

export function getAllLessonSlugs() {
  return Object.keys(lessonsMap);
}
