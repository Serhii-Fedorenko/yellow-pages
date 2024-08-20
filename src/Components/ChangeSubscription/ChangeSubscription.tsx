const ChangeSubscription = () => {
  return (
    <form>
      <label>
        Chose your plan
        <label>
          <input type="radio" name="subscription" value='starter'/> Starter
        </label>
        <label>
          <input type="radio" name="subscription" value='business'/> Business
        </label>
        <label>
          <input type="radio" name="subscription" value='pro'/> Pro
        </label>
      </label>
    </form>
  );
};

export default ChangeSubscription;
