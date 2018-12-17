CREATE DATABASE checkoutDB;
USE checkoutDB;

CREATE TABLE account (
    account_id INT NOT NULL AUTO_INCREMENT,
    username varchar(50),
    email varchar(50),
    password varchar(50), 
    PRIMARY KEY (account_id)
);

CREATE TABLE account_address (
    address_id INT AUTO_INCREMENT,
    parent_id INT,
    lineOne varchar(50),
    lineTwo varchar(50),
    city varchar(50),
    addressState varchar(50),
    zip varchar(50),
    phone_number varchar(50),
    primary key (address_id),
    FOREIGN KEY (parent_id)
        REFERENCES account(account_id)
);

CREATE TABLE credit_card (
    id INT,
    account_id INT,
    cc_number INT,
    exp_date varchar(50),
    cvv INT,
    billing_zip INT,
    FOREIGN KEY (id)
        REFERENCES account(account_id)
);