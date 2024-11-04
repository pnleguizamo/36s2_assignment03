import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

function Payment({dataF, setDataF, setViewer}) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data); // log all data
        // console.log(data.fullName); // log only fullname

        setDataF(data);
        setViewer(2);
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
                <h3 className="text-center mb-4">User Information</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="container">
                    <div className="form-group mb-3">
                        <input
                            {...register("fullName", { required: true })}
                            placeholder="Full Name"
                            className="form-control"
                        />
                        {errors.fullName && <p className="text-danger mt-1">Full Name is required.</p>}
                    </div>
    
                    <div className="form-group mb-3">
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            placeholder="Email"
                            className="form-control"
                        />
                        {errors.email && <p className="text-danger mt-1">Email is required.</p>}
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
    
                    <div className="form-group mb-3">
                        <input
                            {...register("city", { required: true })}
                            placeholder="City"
                            className="form-control"
                        />
                        {errors.city && <p className="text-danger mt-1">City is required.</p>}
                    </div>
    
                    <div className="form-group mb-3">
                        <input
                            {...register("state", { required: true })}
                            placeholder="State"
                            className="form-control"
                        />
                        {errors.state && <p className="text-danger mt-1">State is required.</p>}
                    </div>
    
                    <div className="form-group mb-4">
                        <input
                            {...register("zip", { required: true })}
                            placeholder="Zip"
                            className="form-control"
                        />
                        {errors.zip && <p className="text-danger mt-1">Zip is required.</p>}
                    </div>
    
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
    
}

export default Payment;