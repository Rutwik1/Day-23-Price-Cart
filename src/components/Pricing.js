function FreePricing({
    title,
    plan,
    noOfUsers,
    strgAmount,
    noOfProjects,
    comAcc,
    privAcc,
    phnSup,
    subDom,
    statRep,
  }) {
    return (
      <div className="pricing-card">
        <h3 className="disabled">{title}</h3>
        <h1>${plan}/month</h1>
        <hr></hr>
        <ul>
          <li>{noOfUsers} User</li>
          <li>{strgAmount}GB Storage</li>
          <li>{noOfProjects} Public Projects</li>
          <li >{comAcc}</li>
          <li className="disabled">{privAcc}</li>
          <li className="disabled">{phnSup}</li>
          <li className="disabled">{subDom}</li>
          <li className="disabled">{statRep}</li>
        </ul>
        <button>BUTTON</button>
      </div>
    );
  }
  
  function PlusPricing({
    title,
    plan,
    noOfUsers,
    strgAmount,
    noOfProjects,
    comAcc,
    privAcc,
    phnSup,
    subDom,
    statRep,
  }) {
    return (
      <div className="pricing-card">
        <h3 className="disabled">{title}</h3>
        <h1>${plan}/month</h1>
        <hr></hr>
        <ul>
          <li><b>{noOfUsers} Users</b></li>
          <li>{strgAmount}GB Storage</li>
          <li>{noOfProjects} Public Projects</li>
          <li>{comAcc}</li>
          <li>{privAcc}</li>
          <li>{phnSup}</li>
          <li>{subDom}</li>
          <li className="disabled">{statRep}</li>
        </ul>
        <button>BUTTON</button>
  
      </div>
    );
  }
  
  function ProPricing({
    title,
    plan,
    noOfUsers,
    strgAmount,
    noOfProjects,
    comAcc,
    privAcc,
    phnSup,
    subDom,
    statRep,
  }) {
    return (
      <div className="pricing-card">
        <h3 className="disabled">{title}</h3>
        <h1>${plan}/month</h1>
        <hr></hr>
        <ul>
          <li><b>{noOfUsers} User</b></li>
          <li>{strgAmount}GB Storage</li>
          <li>{noOfProjects} Public Projects</li>
          <li>{comAcc}</li>
          <li>{privAcc}</li>
          <li>{phnSup}</li>
          <li><b>Unlimited </b>{subDom}</li>
          <li>{statRep}</li>
        </ul>
        <button>BUTTON</button>
  
      </div>
    );
  }
  
  export { FreePricing, PlusPricing, ProPricing };