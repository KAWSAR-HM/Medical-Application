export default function Blogs() {
    return (
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold text-center mb-6">React Blogs</h1>
  
          {/* Q1 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              1. What is <code>useState</code> and how does it work in React?
            </h2>
            <p className="text-gray-700">
              <code>useState</code> is a Hook in React that allows functional components to manage state. It returns an array with two values: the current state and a function to update that state. When the update function is called, React re-renders the component with the new state value.
            </p>
          </div>
  
          {/* Q2 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              2. What is the purpose of <code>useEffect</code> in React?
            </h2>
            <p className="text-gray-700">
              <code>useEffect</code> is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the component renders and can depend on specific variables to determine when it should re-run.
            </p>
          </div>
  
          {/* Q3 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              3. What is a custom hook in React and when should you use one?
            </h2>
            <p className="text-gray-700">
              A custom hook is a JavaScript function that starts with "use" and allows you to reuse logic between components. Use custom hooks when multiple components share similar logic (e.g., fetching data, form handling).
            </p>
          </div>
  
          {/* Q4 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              4. Difference between controlled and uncontrolled components? Which one is better?
            </h2>
            <p className="text-gray-700">
              Controlled components manage form data via React state and provide full control. Uncontrolled components use the DOM directly via refs. Controlled components are more predictable and are preferred for most use-cases.
            </p>
          </div>
  
          {/* Q5 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              5. Tell us something about <code>useFormStatus()</code> (explore and explain)
            </h2>
            <p className="text-gray-700">
              <code>useFormStatus()</code> is a hook from React’s experimental features, used within <code>&lt;form action&gt;</code> to get the current status of a form (like pending, submitting, success). It helps to show UI feedback like disabling buttons or showing spinners during submission.
            </p>
          </div>
        </div>
      </div>
    );
  }
  