/**
 * Created by amills001c on 11/30/15.
 */


var _ = require('underscore');
var async = require('async');


var sliced = process.argv.slice(1).concat(3);

console.log(sliced);


//async.parallel([function (cb) {
//
//    setTimeout(function(){
//        cb(null,new Error('dum'));
//    },1000);
//
//}, function (cb) {
//    setTimeout(function(){
//        cb(null,new Error('dum'));
//    },1000);
//
//}], function done(err, results) {
//   console.log(err,results);
//})
//
//
//async.series([function (cb) {
//
//    setTimeout(function(){
//        cb(null,new Error('dum'));
//    },200);
//
//}, function (cb) {
//    setTimeout(function(){
//        cb(null,new Error('dum'));
//    },200);
//
//}], function done(err, results) {
//    console.log(err,results);
//});


//
//async.each([1,2,3], function(value,cb){
//    setTimeout(function(){
//        cb(value);
//    },200);
//
//},function done(err, results) {
//    console.log(err,results);
//});