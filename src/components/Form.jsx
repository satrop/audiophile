import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Checkout</h1>
			<div className="form-section">
				<div className="overline">Billing details</div>
				<div className="form-element">
					<label htmlFor="name">Name</label>
					<input id="name" type="text" {...register("example")} />
				</div>
			</div>
		</form>
	);
};

export default Form;

// export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
// }
