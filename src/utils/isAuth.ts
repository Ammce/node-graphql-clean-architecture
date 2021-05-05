class IsAuth {
  constructor() {}
  public isAuth({
    resolve,
    args,
    context,
    children,
  }: {
    resolve: any;
    args: any;
    context: any;
    children?: any;
  }) {
    try {
      // Todo is logged in, if so push the data
      return resolve(args, context);
    } catch (error) {
      console.log("Error in resolving");
    }
  }
}

const isAuth = new IsAuth();
export default isAuth;
