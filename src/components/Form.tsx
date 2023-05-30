import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  categories: string[];
  getformData: (formData: {
    description: string;
    amount: number;
    category: number;
  }) => void;
}

function Form({ categories, getformData }: Props) {
  const schema = z.object({
    description: z
      .string()
      .min(3, { message: "at least 3 charecters required" }),
    amount: z.number({ invalid_type_error: "amount field is required" }),
    category: z.number({ invalid_type_error: "category field is required" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const obj = {
      description: data.description,
      amount: data.amount,
      category: data.category,
    };
    getformData(obj);
    reset();
  };

  return (
    <div>
      <h3>Create new list Item</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="Number"
            className="form-control"
            id="amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-lable">
            Category
          </label>
          <select
            {...register("category", { valueAsNumber: true })}
            id="category"
            className="form-select"
          >
            {categories.map((item, index) => {
              if (index === 0) {
                return null;
              }

              return (
                <option value={index} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
