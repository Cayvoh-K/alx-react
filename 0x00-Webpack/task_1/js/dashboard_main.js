import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
};

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="myButton">Click here to get started</buttton>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
    
    $('#myButton').on('click', _.debounce(updateCounter, 1000));
});