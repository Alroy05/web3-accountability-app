import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { contract } from "../utils/contracts";

export const AddTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState("");

    return (
        <div style={{ width: "100%", position: "relative" }}>
            <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    position: "absolute",
                    right: 0,
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#222",
                    color: "#fff",
                    fontSize: "12px",
                    cursor: "pointer",
                }}
            >Add Task</button>
            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <div style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "20px",
                        backgroundColor: "#222",
                        borderRadius: "8px",
                        minWidth: "300px",
                    }}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                padding: "5px",
                                borderRadius: "4px",
                                border: "none",
                                color: "#fff",
                                fontSize: "12px",
                                cursor: "pointer",
                            }}
                        >Close</button>
                        <p style={{ fontSize: "12px", marginTop: "30px", marginBottom: "5px" }}>Enter task description:</p>
                        <input 
                            type="text" 
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="Enter task..."
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "none",
                                marginBottom: "10px",
                            }}
                        />
                        <TransactionButton
                            transaction={() => (
                                prepareContractCall({
                                    contract: contract,
                                    method: "createTask",
                                    params: [task]
                                })
                            )}
                            onTransactionConfirmed={() => {
                                setIsModalOpen(false)
                                setTask("")
                                alert("Task Added!")
                            }}
                            style={{
                                width: "100%",
                                fontSize: "12px",
                                padding: "10px",
                            }}
                        >Add Task</TransactionButton>
                    </div>
                </div>
            )}
        </div>
    )
};