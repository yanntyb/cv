<?php

use App\Traits\GlobalEntityTrait;

class Child
{
    use GlobalEntityTrait;

    private string $content;
    private Balise $balise;
    private Section $section;

    //This one is actually the parent of the child and not the child
    private Child $child;

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return $this
     */
    public function setContent(string $content): Child
    {
        $this->content = $content;
        return $this;
    }

    /**
     * @return Balise
     */
    public function getBalise(): Balise
    {
        return $this->balise;
    }

    /**
     * @param Balise $balise
     * @return $this
     */
    public function setBalise(Balise $balise): Child
    {
        $this->balise = $balise;
        return $this;
    }

    /**
     * @return Section
     */
    public function getArticle(): Section
    {
        return $this->article;
    }

    /**
     * @param Section $article
     * @return $this
     */
    public function setArticle(Section $article): Child
    {
        $this->article = $article;
        return $this;
    }

    /**
     * @return Child
     */
    public function getChild(): Child
    {
        return $this->child;
    }

    /**
     * @param Child $child
     * @return $this
     */
    public function setChild(Child $child): Child
    {
        $this->child = $child;
        return $this;
    }


}