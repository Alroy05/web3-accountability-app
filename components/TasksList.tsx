import { TransactionButton, useReadContract } from "thirdweb/react";
import { contract } from "../utils/contracts";
import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { TaskCard } from "./TaskCard";

export const TasksList = () => {
    const [task, setTask] = useState("");

    const { 
        data: tasks,
        isLoading: isLoadingTasks
    } = useReadContract({
        contract: contract,
        method: "getTasks"
    });

    return (
        <div style={{ marginTop: "50px"}}>
            {!isLoadingTasks && tasks!.length > 0 ? (
                tasks?.map((task, index) => (
                    <TaskCard
                        key={index}
                        taskId={index}
                        task={task.description}
                        isCompleted={task.isCompleted}
                    />
                ))
            ) : (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px"
                }}>
                    <h3>Create Tasks</h3>
                    <p>Please create the first task to complete.</p>
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
                            marginBottom: "20px",
                            marginTop: "20px",
                            maxWidth: "300px"
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
                            setTask("");
                            alert("First Task Created!");
                        }}
                    >Add Task</TransactionButton>
                </div>
            )}
        </div>
    )
};