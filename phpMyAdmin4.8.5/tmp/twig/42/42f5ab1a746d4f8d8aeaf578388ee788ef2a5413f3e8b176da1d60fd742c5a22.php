<?php

/* database/central_columns/add_column.twig */
class __TwigTemplate_1380942e58f064270a3baf54b83d10963a345a70189ebf1063fa529955df1d76 extends Twig_Template
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
        echo "<table class=\"central_columns_add_column\" class=\"navigation nospacing nopadding\">
    <tr>
        <td class=\"navigation_separator largescreenonly\"></td>
        <td class=\"central_columns_navigation\">
            ";
        // line 5
        echo (isset($context["icon"]) ? $context["icon"] : null);
        echo "
            <form id=\"add_column\" action=\"db_central_columns.php\" method=\"post\">
                ";
        // line 7
        echo PhpMyAdmin\Url::getHiddenInputs((isset($context["db"]) ? $context["db"] : null));
        echo "
                <input type=\"hidden\" name=\"add_column\" value=\"add\">
                <input type=\"hidden\" name=\"pos\" value=\"";
        // line 9
        echo twig_escape_filter($this->env, (isset($context["pos"]) ? $context["pos"] : null), "html", null, true);
        echo "\" />
                <input type=\"hidden\" name=\"total_rows\" value=\"";
        // line 10
        echo twig_escape_filter($this->env, (isset($context["total_rows"]) ? $context["total_rows"] : null), "html", null, true);
        echo "\"/>
                ";
        // line 11
        echo (isset($context["table_drop_down"]) ? $context["table_drop_down"] : null);
        echo "
                <select name=\"column-select\" id=\"column-select\">
                    <option value=\"\" selected=\"selected\">";
        // line 13
        echo _gettext("Select a column.");
        echo "</option>
                </select>
            </form>
        </td>
        <td class=\"navigation_separator largescreenonly\"></td>
    </tr>
</table>
";
    }

    public function getTemplateName()
    {
        return "database/central_columns/add_column.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  48 => 13,  43 => 11,  39 => 10,  35 => 9,  30 => 7,  25 => 5,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "database/central_columns/add_column.twig", "E:\\phpstudy_pro\\WWW\\biyesheji\\phpMyAdmin4.8.5\\templates\\database\\central_columns\\add_column.twig");
    }
}
