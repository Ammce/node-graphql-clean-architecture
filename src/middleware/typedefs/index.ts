import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypes } from "../../modules/User/user.types";
import { productTypes } from "../../modules/Product/product.types";

const types = [userTypes, productTypes];

export default mergeTypeDefs(types);
