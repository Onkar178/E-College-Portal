// // src/redux/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (loginData, thunkAPI) => {
//     try {
//       const response = await axios.post("http://localhost:8080/user/login", loginData);
//       const data = response.data;

//       // Log the backend response
//       console.log("Backend login response:", data);

//       // Must return the full user data including rid
//       return {
//         uid: data.uid,
//         email: data.email,
//         rid: data.rid,       // ✅ Make sure rid is here
//         rname: data.rname    // Optional
//       };
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data?.message || "Login failed");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     isLoading: false,
//     error: null
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload; // ✅ This includes rid now
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || "Something went wrong";
//       });
//   }
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;




// // src/redux/authSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (loginData, thunkAPI) => {
//     try {
//       // Step 1: Login through user-service (port 8080)
//       const loginRes = await axios.post("http://localhost:8080/user/login", loginData);
//       const loginDataResp = loginRes.data;

//       console.log("Backend login response:", loginDataResp);

//       let studentData = {};

//       // Step 2: If role is student (rid == 1), fetch student details from student-service
//       if (loginDataResp.rid === 1) {
//         try {
//           const studentRes = await axios.get(
//             `http://localhost:8081/student/uid/${loginDataResp.uid}`
//           );
//           studentData = studentRes.data || {};
//         } catch (err) {
//           console.error("Error fetching student details:", err);
//         }
//       }

//       // Step 3: Return combined user and student data
//       return {
//         uid: loginDataResp.uid,
//         email: loginDataResp.email,
//         rid: loginDataResp.rid,
//         rname: loginDataResp.rname,
//         sid: studentData.sid || null,
//         firstName: studentData.firstName || null,
//         lastName: studentData.lastName || null,
//       };
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data?.message || "Login failed");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,      // will contain uid, email, rid, rname, sid, firstName, lastName
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload; // full user + student info
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || "Something went wrong";
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (loginData, thunkAPI) => {
//     try {
//       // Step 1: Login through user-service (port 8080)
//       const loginRes = await axios.post("http://localhost:8080/user/login", loginData);
//       const loginDataResp = loginRes.data;

//       console.log("Backend login response:", loginDataResp);

//       let studentData = {};

//       // Step 2: If role is student (rid === 1), fetch student details from student-service
//       if (loginDataResp.rid === 1) {
//         try {
//           const studentRes = await axios.get(
//             `http://localhost:8081/student/uid/${loginDataResp.uid}`
//           );
//           studentData = studentRes.data || {};
//         } catch (err) {
//           console.error("Error fetching student details:", err);
//         }
//       }

//       // Step 3: Return combined user and student data
//       return {
//         uid: loginDataResp.uid,
//         email: loginDataResp.email,
//         rid: loginDataResp.rid,
//         rname: loginDataResp.rname,
//         sid: studentData.sid || null,
//         firstName: studentData.firstName || null,
//         lastName: studentData.lastName || null,
//       };
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data?.message || "Login failed");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null, // will contain uid, email, rid, rname, sid, firstName, lastName
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || "Something went wrong";
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, thunkAPI) => {
    try {
      // Step 1: Login through user-service (port 8080)
      const loginRes = await axios.post("http://localhost:8080/user/login", loginData);
      const loginDataResp = loginRes.data;

      console.log("Backend login response:", loginDataResp);

      let studentData = null;

      // Step 2: If role is student (rid === 1), fetch student details from student-service
      if (loginDataResp.rid === 1) {
        try {
          const studentRes = await axios.get(
            `http://localhost:8081/student/uid/${loginDataResp.uid}`
          );
          studentData = studentRes.data || null;
          console.log("Fetched student details:", studentData);
        } catch (err) {
          console.error("Error fetching student details:", err);
        }
      }

      // Step 3: Return combined user and student data (always structured)
      return {
        uid: loginDataResp.uid,
        email: loginDataResp.email,
        rid: loginDataResp.rid,
        rname: loginDataResp.rname,
        // Student specific fields (null for non-students)
        sid: studentData?.sid || null,
        firstName: studentData?.firstName || null,
        lastName: studentData?.lastName || null,
      };
    } catch (err) {
      console.error("Login error:", err);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // will contain uid, email, rid, rname, sid, firstName, lastName
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
