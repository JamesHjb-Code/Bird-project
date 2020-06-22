<?php

/* database/qbe/column_select_cell.twig */
class __TwigTemplate_c86544ed9ed75945d734aa0c000dee1f3eb6b6bf6ea8b667d2989f08e8a96cb5 extends Twig_Template
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
    <select name=\"criteriaColumn[";
        // line 2
        echo twig_escape_filter($this->env, (isset($context["column_number"]) ? $context["column_number"] : null), "html", null, true);
        echo "]\" size=\"1\">
        <option value=\"\">&nbsp;</option>
        ";
        // line 4
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["column_names"]) ? $context["column_names"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
            // line 5
            echo "            <option value=\"";
            echo twig_escape_filter($this->env, $context["column"], "html", null, true);
            echo "\"";
            // line 6
            if (($context["column"] === (isset($context["selected"]) ? $context["selected"] : null))) {
                echo " selected=\"selected\"";
            }
            echo ">
                ";
            // line 7
            echo twig_escape_filter($this->env, twig_replace_filter(twig_escape_filter($this->env, $context["column"]), [" " => "&nbsp;"]), "html", null, true);
            echo "
            </option>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 10
        echo "    </select>
</td>
";
    }

    public function getTemplateName()
    {
        return "database/qbe/column_select_cell.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 10,  41 => 7,  35 => 6,  31 => 5,  27 => 4,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "database/qbe/column_select_cell.twig", "E:\\phpstudy_pro\\WWW\\biyesheji\\phpMyAdmin4.8.5\\templates\\database\\qbe\\column_select_cell.twig");
    }
}
