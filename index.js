function receivesAFunction(callBackFunction) {
    return callBackFunction();
}    

function namedFunction() {}
function returnsANamedFunction () {
    return namedFunction
  }

function returnsAnAnonymousFunction() {
        return function () {};
}

