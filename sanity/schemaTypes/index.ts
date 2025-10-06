import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { youTubeType } from "./youTubeType";
import { dividerType } from "./dividerType";
import { bannerType } from "./bannerType";
import { descriptionContentType } from "./descriptionContentType";
import { stepsType } from "./stepsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    dividerType,
    youTubeType,
    bannerType,
    descriptionContentType,
    stepsType
  ],
};
