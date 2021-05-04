import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypes } from "../../modules/User/user.types";

const types = [userTypes];

export default mergeTypeDefs(types);
