<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\User\UserInterface;
use App\Services\User\UserFacade as User;
use App\Http\Resources\UserCollection;

class UserController extends Controller
{   
    public function __construct(){
      
    }

    public function index(){
       return new UserCollection(User::get());
    }

    public function show($id){
        $module = User::find($id);
        return $module;
    }
   
    public function store(Request $request){
        $user = User::create($request);
        return $user;
     }

    public function update(Request $request){
        $user = User::update($request);
        return $user;
    }

    public function destroy($id)
    {
        $result = User::destroy($id);
        return $result;
    }
}  