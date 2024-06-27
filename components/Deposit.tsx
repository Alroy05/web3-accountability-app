import { useState } from "react";
import { prepareContractCall, toWei } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { contract } from "../utils/contracts";

export const Deposit = () => {
    const [depositAmount, setDepositAmount] = useState(0);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px"
        }}>
            <h3>Deposit</h3>
            <p>Please deposit the funds to hold.</p>
            <input 
                type="number" 
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
                placeholder="0.0"
                step={0.01}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    marginBottom: "20px",
                    marginTop: "20px",
                    maxWidth: "300px"
                }}
            />
            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: contract,
                        method: "depositFunds",
                        value: toWei(depositAmount.toString())
                    })
                )}
                onTransactionConfirmed={() => alert("Deposit Confirmed!")}
            >Deposit Funds</TransactionButton>
        </div>
    )
};