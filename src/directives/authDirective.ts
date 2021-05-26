import { defaultFieldResolver, GraphQLField } from "graphql";
import { SchemaDirectiveVisitor } from "graphql-tools";

export class AuthDirective extends SchemaDirectiveVisitor {
  public visitObject() {
    console.log("OVDE AE");
    console.log(this.args);
  }
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    const { permissions } = this.args;
    field.resolve = async function (...args) {
      console.log("OVDE SAM", args[2]);
      const result = await resolve.apply(this, args);
      return result;
    };
  }
}
