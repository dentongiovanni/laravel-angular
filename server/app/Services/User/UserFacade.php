<?php
namespace App\Services\User;

use \Illuminate\Support\Facades\Facade;

/**
 * Facade for user service
 */
class UserFacade extends Facade
{

    /**
     * Returning service name
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'App\Services\User\UserService';
    }
}
