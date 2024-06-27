export const CONTRACT_ABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "DepositMade",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DepositWithdrawn",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TaskCompleted",
    "inputs": [
      {
        "type": "uint256",
        "name": "taskId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TaskCreated",
    "inputs": [
      {
        "type": "uint256",
        "name": "taskId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "description",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "completeTask",
    "inputs": [
      {
        "type": "uint256",
        "name": "_taskId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createTask",
    "inputs": [
      {
        "type": "string",
        "name": "_description",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositFunds",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getDeposit",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTaskCount",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTasks",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "description",
            "internalType": "string"
          },
          {
            "type": "bool",
            "name": "isCompleted",
            "internalType": "bool"
          }
        ],
        "internalType": "struct AccountabilityContract.Task[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tasks",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "description",
        "internalType": "string"
      },
      {
        "type": "bool",
        "name": "isCompleted",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "withdrawDepositSafely",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
] as const;