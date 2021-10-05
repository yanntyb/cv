<?php

use App\Traits\GlobalEntityTrait;

class Content
{
    use GlobalEntityTrait;

    private string $balise;
    private string $contenue;
    private Section $section;

    /**
     * @return string
     */
    public function getBalise(): string
    {
        return $this->balise;
    }

    /**
     * @param string $balise
     * @return $this
     */
    public function setBalise(string $balise): Content
    {
        $this->balise = $balise;
        return $this;
    }

    /**
     * @return string
     */
    public function getContenue(): string
    {
        return $this->contenue;
    }

    /**
     * @param string $contenue
     * @return $this
     */
    public function setContenue(string $contenue): Content
    {
        $this->contenue = $contenue;
        return $this;
    }

    /**
     * @return Section
     */
    public function getSection(): Section
    {
        return $this->section;
    }

    /**
     * @param Section $section
     * @return $this
     */
    public function setSection(Section $section): Content
    {
        $this->section = $section;
        return $this;
    }




}