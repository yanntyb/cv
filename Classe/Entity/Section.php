<?php

use App\Traits\GlobalEntityTrait;

class Section
{
    use GlobalEntityTrait;

    private string $title;
    private int $side;

    /**
     * @return int
     */
    public function getSide(): int
    {
        return $this->side;
    }

    /**
     * @param int $side
     * @return $this
     */
    public function setSide(int $side): Section
    {
        $this->side = $side;
        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle(string $title): Section
    {
        $this->title = $title;
        return $this;
    }


}