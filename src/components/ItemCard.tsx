import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type ExpenseProps = {
  name: string;
  amount: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard() {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return {
    /* Type additional text here. */
  };
}

  // add more state variables:
  const [Category, setCategory] = useState("");
  const [Amount, setAmount] = useState("");
  const [Expense Name Error, setExpense Name nameError] = useState(false);
  const [CategoryError, setCategoryError] = useState(false);
  const [AmountError, setAmountError] = useState(false);
  const [isUserAgreed, setUserAgreed] = useState(false);

    // ----------------------------------------------------------------
    const inputExpensenameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setExpensenameError(false);
      setExpensename(event.target.value);
    };
  
    const selectCategoryOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCategoryError(false);
      setCategory(event.target.value);
    };
  
    const AmountOnChange = () => {
      setAmountError(false);
      seAmount("event.target.value");
    };
  
    // ----------------------------------------------------------------

const computeTotalPayment = () => {
  let total = 0;
  if (Category === "Food") 
  if (Category === "Transport") 
  if (Category === "Extainment") 
 

  return ;
};

// ----------------------------------------------------------------

const registerBtnOnClick = () => {
  let ExpensenameOk = true;
  let AmountOk = true;
  let CategoryOk = true;
  if (Expensename === "") {
    ExpensenameOk = false;
    seExpenseFnameError(true);
  }
  if (Amount === "") {
    AmountOk = false;
    setAmountError(true);
  }
  if (Category === "") {
    CategoryOk = false;
    setCategoryError(true);
  }

  if (ExpensenameOk && AmountOk && CategoryOk) {
    alert(
      `Registration complete. Please pay money for ${computeTotalPayment().toLocaleString()} THB.`
    );
  }
};

return (

<div
      className="modal fade"
      id="modalregister" //id="modalregister": ตัวระบุของ modal (ใช้กับ data-bs-target หน้า HomePage)
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register CMU Marathon 🏃‍♂️</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body"></div>
{/* Expense Name */}
<div className="d-flex gap-2">
<div>
  <label className="form-label">Expense Name</label>
  <input
    className={"form-control" + (Expense nameError ? " is-invalid" : "")}
    onChange={inputExpensenameOnChange}
    value={Expense name}
  />
  <div className="invalid-feedback">Expense Name is required</div>
</div>
<div>

{/* Amount */}
<div className="d-flex gap-2">
<div>
  <label className="form-label">Amount</label>
  <input
  <div className="invalid-feedback">Amount is required</div>
  </div>
  <div>




{/* Category */}
<div className="mt-2">
<label className="form-label">Category</label>
<select
  className={"form-select" + (CategoryError ? " is-invalid" : "")}
  onChange={selectCategoryOnChange}
  value={Category}
>
  <option value="">Select Category</option>
  <option value="Food">Food</option>
  <option value="Transport">Transport</option>
  <option value="Entertainment">Entertainment</option>
</select>
<div className="invalid-feedback">Category is required</div>
</div>

{/* Register Button */}
<button
className="btn btn-success my-2"
onClick={registerBtnOnClick}
//You can embbed a state like below to disabled the button
disabled={!isUserAgreed}
>
Register
</button>
</div>