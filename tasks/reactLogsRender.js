import {
  useRef,
  useEffect,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  useState
} from "react";

const Child = forwardRef((props, ref) => {
  console.log("Called Child");
  let [state, useSt] = useState(() => console.log('child state'))

  useImperativeHandle(ref, () => {
    console.log("useImperativeHandle (not part of test)");
    return {};
  });

  useEffect(() => {
    console.log("Child useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Child useLayoutEffect");
  }, []);
  console.log("Return child JSX");

  return (
    <div
      ref={(el) => {
        console.log("child callback ref");
        ref.current = el;
      }}
    >
      Child
    </div>
  );
});

export default function Parent() {
  console.log("Called Parent");

  const ref = useRef(false);
  const childRef = useRef(false);

  useEffect(() => {
    console.log("Parent useEffect");
  }, []);

  useLayoutEffect(() => {
    ref.current = true;
    console.log("Parent useLayoutEffect");
  }, []);

  return (
    <main>
      <button
        autoFocus
        onFocus={() => console.log("Focusing button", ref.current)}
      >
        Button
      </button>
      {console.log("Before <Child/>")}
      <Child ref={childRef} />
      {console.log("After <Child/>")}
    </main>
  );
}

// Called Parent
// Before <Child/>
// After <Child/>
// Called Child
// child state
// Return child JSX
// Focusing button
// false
// child callback ref
// useImperativeHandle (not part of test)
// Child useLayoutEffect
// Parent useLayoutEffect
// Child useEffect
// Parent useEffect
