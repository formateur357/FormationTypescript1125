function NonModifiable() {
  return function (
    value: Function,
    context: ClassMethodDecoratorContext
  ) {
    if (context.kind !== "method") {
      throw new Error("NonModifiable s'applique uniquerment aux methodes.")
    }

    context.addInitializer(function () {
      Object.defineProperty(this, context.name, {
        writable: false
      })
    })
  }
}

class Personne1 {
  @NonModifiable()
  direBonjour() {
    console.log("Bonjour !")
  }
}