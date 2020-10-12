<?php

namespace App\Repositories\User;

interface UserInterface{

	public function get();

	public function find($id);

    public function create(array $attributes);

	public function update($id, array $attributes);

	public function destroy($id);
}