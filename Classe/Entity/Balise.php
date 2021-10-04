<?php

use App\Traits\GlobalEntityTrait;

class Balise
{
    use GlobalEntityTrait;

    private string $name;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $balise
     * @return $this
     */
    public function setName(string $balise): Balise
    {
        $this->name = $balise;
        return $this;
    }

}