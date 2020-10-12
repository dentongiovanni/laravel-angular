<?php

namespace App\Repositories\User;


use App\Models\User;

class UserRepository implements UserInterface
{

	private $model;

	public function __construct(User $model){
		$this->model = $model;
	}

	public function get(){
	    return $this->model->get();
	}

	public function find($id){
		return $this->model->find($id);
	}

	public function create(array $attributes){
		return $this->model->create($attributes);
	}

    public function update($id, array $attributes ){
		$member = $this->model->find($id);
        $member->update($attributes);
        return $member;
	}

	public function destroy($id){
	     $user =  $this->model->find($id);
	     $user->delete();
	     return $user;
	}
}