<?php

/* database/qbe/sort_select_cell.twig */
class __TwigTemplate_52059b73a21887e90189bf59ba098fdd00385f157dac9110602cbf6b96541240 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<td class=\"center\">
    <select style=\"width:";
        // line 2
        echo twig_escape_filter($this->env, (isset($context["real_width"]) ? $context["real_width"] : null), "html", null, true);
        echo "\" name=\"criteriaSort[";
        echo twig_escape_filter($this->env, (isset($context["column_number"]) ? $context["column_number"] : null), "html", null, true);
        echo "]\" size=\"1\">
        <option value=\"\">&nbsp;</option>
        <option value=\"ASC\"";
        // line 5
        echo ((((isset($context["selected"]) ? $context["selected"] : null) == "ASC")) ? (" selected=\"selected\"") : (""));
        echo ">";
        echo _gettext("Ascending");
        echo "</option>
        <option value=\"DESC\"";
        // line 7
        echo ((((isset($context["selected"]) ? $context["selected"] : null) == "DESC")) ? (" selected=\"selected\"") : (""));
        echo ">";
        echo _gettext("Descending");
        echo "</option>
    </select>
</td>
";
    }

    public function getTemplateName()
    {
        return "database/qbe/sort_select_cell.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  35 => 7,  29 => 5,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "database/qbe/sort_select_cell.twig", "E:\\phpstudy_pro\\WWW\\biyesheji\\phpMyAdmin4.8.5\\templates\\database\\qbe\\sort_select_cell.twig");
    }
}
