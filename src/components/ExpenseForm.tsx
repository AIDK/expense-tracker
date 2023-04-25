import categories from "../categories";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// validation schema (sets field character limits, sets field types and error messages when validation fails)
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // handle form submission
        onSubmit(data);
        // reset or clear form after submission
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        {/* register description identifier so that it can be validated on submit */}
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {/* display error message when description fails validation */}
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        {/* register amount identifier so that it can be validated on submit. 
        Also remember to set valueAsNumber to True otherwise validation fails even when entering a number (input is seen as string)*/}
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
        {/* display error message when amount fails validation */}
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        {/* register category identifier so that it can be validated on form submit */}
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option id={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* display error message when category fails validation */}
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
