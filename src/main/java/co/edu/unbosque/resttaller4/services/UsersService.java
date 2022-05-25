package co.edu.unbosque.resttaller4.services;

import co.edu.unbosque.resttaller4.dtos.UserApp;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UsersService {

    // Objects for handling connection
    private Connection conn;

    public UsersService(Connection conn) {
        this.conn = conn;
    }

    public List<UserApp> listUsers() {
        // Object for handling SQL statement
        Statement stmt = null;

        // Data structure to map results from database
        List<UserApp> userApps = new ArrayList<UserApp>();

        try {
            // Executing a SQL query
            System.out.println("=> Listing users...");
            stmt = conn.createStatement();
            String sql = "SELECT * FROM Usuario";
            ResultSet rs = stmt.executeQuery(sql);

            // Reading data from result set row by row
            while (rs.next()) {
                // Extracting row values by column name
                String email = rs.getString("email");
                String password = rs.getString("password");
                String username = rs.getString("username");
                String role = rs.getString("role");


                // Creating a new UserApp class instance and adding it to the array list
                userApps.add(new UserApp(email, password, username, role));
            }


            // Printing total rows
            System.out.println("Total of users retrieved: " + userApps.size() + "\n");

            // Closing resources
            rs.close();
            stmt.close();
        } catch (SQLException se) {
            se.printStackTrace(); // Handling errors from database
        } finally {
            // Cleaning-up environment
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
        return userApps;
    }

    public UserApp getUser(String username) {
        // Object for handling SQL statement
        PreparedStatement stmt = null;

        // Data structure to map results from database

        UserApp user = null;
        try {
            // Executing a SQL query
            stmt = this.conn.prepareStatement("SELECT * FROM Usuario WHERE email = ?");
            stmt.setString(1, username);
            ResultSet rs = stmt.executeQuery();

            // Reading data from result set row by row
            rs.next();
            // Extracting row values by column
            user = new UserApp(
                    rs.getString("email"),
                    rs.getString("password"),
                    rs.getString("username"),
                    rs.getString("role")
            );

            System.out.println(user);
            // Creating a new UserApp class instance and adding it to the array list

            // Closing resources
            rs.close();
            stmt.close();
        } catch (SQLException se) {
            se.printStackTrace(); // Handling errors from database
        } finally {
            // Cleaning-up environment
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
        return user;
    }

    // Method to insert a new user

    public UserApp newUserApp(UserApp user) {
        // Object for handling SQL statement
        PreparedStatement stmt = null;

        // Data structure to map results from database

        try {
            // Executing a SQL query
            stmt = this.conn.prepareStatement("INSERT INTO Usuario (email, password, username, role)\n" +
                    "VALUES (?,?,?,?)");

            stmt.setString(1, user.getEmail());
            stmt.setString(2, user.getPassword());
            stmt.setString(3, user.getUsername());
            stmt.setString(4, user.getRole());

            stmt.executeUpdate();
            stmt.close();
        } catch (SQLException se) {
            se.printStackTrace(); // Handling errors from database
        } finally {
            // Cleaning-up environment
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
        return user;

    }

    public UserApp updateUserApp(UserApp user) {
        // Object for handling SQL statement
        PreparedStatement stmt = null;

        // Data structure to map results from database

        try {
            // Executing a SQL query
            stmt = this.conn.prepareStatement("UPDATE Usuario SET password = ?, username = ?, role = ? WHERE email = ?");

            stmt.setString(1, user.getPassword());
            stmt.setString(2, user.getUsername());
            stmt.setString(3, user.getRole());
            stmt.setString(4, user.getEmail());

            stmt.executeUpdate();
            stmt.close();
        } catch (SQLException se) {
            se.printStackTrace(); // Handling errors from database
        } finally {
            // Cleaning-up environment
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
        return user;

    }

}
