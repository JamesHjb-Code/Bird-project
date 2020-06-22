<?php

/* database/qbe/sort_order_select_cell.twig */
class __TwigTemplate_d4941eafd68f6c99f8ed0b776b6da835e43fce5cffcd889a1d30a9dd3242cf95 extends Twig_Template
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
    <select name=\"criteriaSortOrder[";
        // line 2
        echo twig_escape_filter($this->env, (isset($context["column_number"]) ? $context["column_number"] : null), "html", null, true);
        echo "]\">
        <option value=\"1000\">&nbsp;</option>
        ";
        // line 4
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(range(1, (isset($context["total_column_count"]) ? $context["total_column_count"] : null)));
        foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
            // line 5
            echo "            <option value=\"";
            echo twig_escape_filter($this->env, $context["i"], "html", null, true);
            echo "\"";
            echo ((($context["i"] == (isset($context["sort_order"]) ? $context["sort_order"] : null))) ? (" selected=\"selected\"") : (""));
            echo ">
                ";
            // line 6
            echo twig_escape_filter($this->env, $context["i"], "html", null, true);
            echo "
            </option>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 9
        echo "    </select>
</td>
";
    }

    public function getTemplateName()
    {
        return "database/qbe/sort_order_select_cell.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  47 => 9,  38 => 6,  31 => 5,  27 => 4,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "database/qbe/sort_order_select_cell.twig", "E:\\phpstudy_pro\\WWW\\biyesheji\\phpMyAdmin4.8.5\\templates\\database\\qbe\\sort_order_select_cell.twig");
    }
}
