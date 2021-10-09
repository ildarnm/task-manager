// uses to set factory of model
export function Model({ factory }: { factory?: () => any }) {
  return function (target: any) {
    target.__factory__ = factory;
  };
}
