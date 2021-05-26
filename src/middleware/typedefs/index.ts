import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypes } from "../../modules/User/user.types";
import { productTypes } from "../../modules/Product/product.types";
import { authTypes } from "../../modules/Auth/auth.types";

const types = [userTypes, productTypes, authTypes];

export default mergeTypeDefs(types);
