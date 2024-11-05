import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

function Payment({ dataF, setDataF, setViewer }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        setDataF(data);
        setViewer(2);
    }

    return (
        <div className="d-flex justify-content-center vh-100 bg-light">
            <div className="container-fluid p-4">
                <div className="card p-4 shadow-sm w-100">
                    <h3 className="text-center mb-4">Order Information</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="container">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <input
                                    {...register("fullName", { required: true })}
                                    placeholder="Full Name"
                                    className="form-control"
                                />
                                {errors.fullName && <p className="text-danger mt-1">Full Name is required.</p>}
                            </div>
                            <div className="col-md-6">
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="Email"
                                    className="form-control"
                                />
                                {errors.email && <p className="text-danger mt-1">Email is required.</p>}
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <input
                                {...register("creditCard", { required: true })}
                                placeholder="Credit Card"
                                className="form-control"
                            />
                            {errors.creditCard && <p className="text-danger mt-1">Credit Card is required.</p>}
                        </div>

                        <div className="form-group mb-3">
                            <input
                                {...register("address", { required: true })}
                                placeholder="Address"
                                className="form-control"
                            />
                            {errors.address && <p className="text-danger mt-1">Address is required.</p>}
                        </div>

                        <div className="form-group mb-3">
                            <input
                                {...register("address2")}
                                placeholder="Address 2"
                                className="form-control"
                            />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <input
                                    {...register("city", { required: true })}
                                    placeholder="City"
                                    className="form-control"
                                />
                                {errors.city && <p className="text-danger mt-1">City is required.</p>}
                            </div>
                            <div className="col-md-4">
                                <input
                                    {...register("state", { required: true })}
                                    placeholder="State"
                                    className="form-control"
                                />
                                {errors.state && <p className="text-danger mt-1">State is required.</p>}
                            </div>
                            <div className="col-md-4">
                                <input
                                    {...register("zip", { required: true, pattern: {
                                        value: /^\d{5}$/,
                                        message: "Zip must be exactly 5 digits."
                                    }  })}
                                    placeholder="Zip"
                                    className="form-control"
                                />
                                {errors.zip && <p className="text-danger mt-1">5 digit Zip is required.</p>}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Order</button>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default Payment;