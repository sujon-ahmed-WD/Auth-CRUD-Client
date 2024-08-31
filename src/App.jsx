import "./App.css";

function App() {


  const Signhandle=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.email.value;
    const password=form.password.value;
    const user={name,password}
    console.log(user);
    fetch('http://localhost:999/auth',{
      method : 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
  }

  return (
    <>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form
               onSubmit={Signhandle}
               className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                  name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
