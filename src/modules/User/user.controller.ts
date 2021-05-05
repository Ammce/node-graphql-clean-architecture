export const controllers = {
  user: async (args: any, context: any): Promise<any> => {
    console.log("OVDE SAM");
    return { name: "Amel", age: 26 };
  },
};
