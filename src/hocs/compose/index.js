export default (...funcs) => Component =>
  funcs.reduceRight((acc, func) => func(acc), Component);
