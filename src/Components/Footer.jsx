export const Footer = () => {
  return (
    <div className="bg-info">
      <footer className="footer p-5 lg:p-32  ">
        <aside></aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control lg:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="lg:join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#FF6161] join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="footer footer-center p-4  ">
        <aside>
          <p>Copyright © 2024 - All right reserved by Shakib </p>
        </aside>
      </div>
    </div>
  );
};

{
  /* <form>
<h6 className="footer-title">Newsletter</h6> 
<fieldset className="form-control w-80">
  <label className="label">
    <span className="label-text">Enter your email address</span>
  </label> 
  <div className="join">
    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
    <button className="btn btn-primary join-item">Subscribe</button>
  </div>
</fieldset>
</form> */
}
